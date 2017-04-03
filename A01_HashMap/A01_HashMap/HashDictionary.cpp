#include "stdafx.h"
#include "HashDictionary.h"

HashDictionary::HashDictionary()
{
    for (size_t q = 0; q < BUCKET_COUNT; q++)
    {
        _buckets[q] = nullptr;
    }
}
HashDictionary::~HashDictionary()
{
    for (size_t q = 0; q < BUCKET_COUNT; q++)
    {
        SafeDelete(_buckets[q]);
    }
}

void HashDictionary::put(const char *const word)
{
    if (has(word)) return;
    auto bucketIdx = this->hash(word) % BUCKET_COUNT;
    auto newLL = new LLNode<const char>(str_clone(word));
    newLL->setNext(_buckets[bucketIdx]);
    _buckets[bucketIdx] = newLL;
}
bool HashDictionary::has(const char *const word)
{
    auto bucketIdx = this->hash(word) % BUCKET_COUNT;
    auto node = _buckets[bucketIdx];
    while (node != nullptr)
    {
        if (are_same(node->value(), word)) return true;
        node = node->next();
    }
    return false;
}

unsigned HashDictionary::hash(const char *const word)
{
    //This is a pretty crappy hash function, I know!
    if (word == nullptr) return 0;
    auto ptr = word;
    unsigned hash = 42;
    while (*ptr != '\0')
    {
        hash = ((hash << 16) | (hash >> 16)) * 7;
        hash += *(ptr++);
    }
    return hash;
}
