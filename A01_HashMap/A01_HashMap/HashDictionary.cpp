#include "stdafx.h"
#include "HashDictionary.h"

HashDictionary::HashDictionary(std::function<int(const char*)> hashFn, unsigned tableSize)
    : _count(0), _duplicates(0), _hashFn(hashFn), _cloneBufferPos(0), _tableSize(tableSize)
{
    _buckets = new LLNode<const char>*[_tableSize];
    for (size_t q = 0; q < _tableSize; q++)
    {
        _buckets[q] = nullptr;
    }
}
HashDictionary::~HashDictionary()
{
    for (size_t q = 0; q < _tableSize; q++)
    {
        SafeDelete(_buckets[q]);
    }
    SafeDelete(_buckets);
}

bool HashDictionary::put(const char *const word)
{
    if (has(word))
    {
        _duplicates++;
        return false;
    }
    auto bucketIdx = this->_hashFn(word) % _tableSize;
    auto newLL = new LLNode<const char>(str_clone(word));
    newLL->setNext(_buckets[bucketIdx]);
    _buckets[bucketIdx] = newLL;
    _count++;
    return true;
}
bool HashDictionary::has(const char *const word)
{
    auto bucketIdx = this->_hashFn(word) % _tableSize;
    auto node = _buckets[bucketIdx];
    while (node != nullptr)
    {
        if (are_same(node->value(), word)) return true;
        node = node->next();
    }
    return false;
}

unsigned HashDictionary::count()
{
    return _count;
}
unsigned HashDictionary::duplicateCount()
{
    return _duplicates;
}

void HashDictionary::printStats(std::ostream &out)
{
    out << "Table entries: " << _tableSize << std::endl;
    out << "Total words: " << count() << std::endl;

    float ideal_average = (float)count() / _tableSize;
    unsigned min_words = _buckets[0]->count(), max_words = min_words, min_count = 1, max_count = 1;
    float error = pow(abs(min_words - ideal_average), 2);

    out << "Bucket counts: [";
    out << min_words;
    for (size_t q = 1; q < _tableSize; q++)
    {
        auto words = _buckets[q]->count();
        if (words < min_words)
        {
            min_words = words;
            min_count = 1;
        }
        else if (words == min_words) min_count++;
        if (words > max_words)
        {
            max_words = words;
            max_count = 1;
        }
        else if (words == max_words) max_count++;
        error += pow(abs((float)(words - ideal_average)), 2);
        out << ", " << words;
    }
    out << "]" << std::endl;
    float std_dev = sqrt(error / _tableSize);

    out << "Smallest quantity of words per entry: " << min_words << " words in " << min_count << " entries." << std::endl;
    out << "Greatest quantity of words per entry: " << max_words << " words in " << max_count << " entries." << std::endl;

    out << "Ideal average: " << ideal_average << std::endl;
    out << "Standard deviation from the ideal: " << std_dev << std::endl;
}

const char *const HashDictionary::str_clone(const char *word)
{
    auto clonePtr = &_cloneBuffer[_cloneBufferPos];
    while (_cloneBufferPos < CLONE_BUFFER_SIZE && *word != '\0')
    {
        _cloneBuffer[_cloneBufferPos++] = *(word++);
    }
    if (_cloneBufferPos >= CLONE_BUFFER_SIZE)
    {
        std::cerr << "Error! Clone buffer has been filled!" << std::endl;
        return nullptr;
    }
    _cloneBuffer[_cloneBufferPos++] = '\0';
    return clonePtr;
}
