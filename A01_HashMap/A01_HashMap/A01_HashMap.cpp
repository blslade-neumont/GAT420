#include "stdafx.h"

#include "HashDictionary.h"
#include "WordReader.h"

void testHash(std::function<int(const char*)> hashFn, const char *const wordPath, unsigned tableSize);

int main(int argc, const char **const argv)
{
    for (size_t q = 0; q < argc; q++)
    {
        std::cout << argv[q] << std::endl;
    }
    std::cout << std::endl;
    const char *const seedFile = argc >= 2 ? argv[1] : "dict_seed.txt";
    unsigned tableSize = argc >= 3 ? parse_uint(argv[2], 100) : 100;

    std::cout << "Testing a 0-returning hash:" << std::endl << std::endl;
    testHash([](const char*) -> int
    {
        return 0;
    }, seedFile, tableSize);

    std::cout << std::endl << "Testing a first-character ascii value hash:" << std::endl << std::endl;
    testHash([](const char *word) -> int
    {
        return word == nullptr ? 0 : *word;
    }, seedFile, tableSize);

    std::cout << std::endl << "Testing a first-three-character ascii value sum hash:" << std::endl << std::endl;
    testHash([](const char *word) -> int
    {
        if (word == nullptr) return 0;
        int hash = 0;
        for (size_t q = 0; q < 3; q++)
        {
            hash += *(word + q);
            if (*(word + q) == '\0') break;
        }
        return hash;
    }, seedFile, tableSize);

    std::cout << std::endl << "Testing a full-character ascii value sum hash:" << std::endl << std::endl;
    testHash([](const char *word) -> int
    {
        if (word == nullptr) return 0;
        int hash = 0;
        while (*word != '\0')
            hash += *(word++);
        return hash;
    }, seedFile, tableSize);

    std::cout << std::endl << "Testing an ascii value shift-xor hash:" << std::endl << std::endl;
    testHash([](const char *word) -> int
    {
        if (word == nullptr) return 0;
        int hash = 0;
        int shiftAmt = 0;
        while (*word != '\0')
            hash ^= *(word++) << shiftAmt++;
        return hash;
    }, seedFile, tableSize);

    std::cout << std::endl << "Testing my own hashing function:" << std::endl << std::endl;
    testHash([](const char *word) -> int
    {
        if (word == nullptr) return 0;
        unsigned hash = 42;
        while (*word != '\0')
        {
            hash = ((hash << 7) | (hash >> 25)) * 7;
            hash += *(word++);
        }
        return hash;
    }, seedFile, tableSize);

    pause();

    return 0;
}

void testHash(std::function<int(const char*)> hashFn, const char *const wordPath, unsigned tableSize)
{
    IDictionary *dict;
    dict = new HashDictionary(hashFn, tableSize);

    {
        WordReader reader(wordPath);
        while (reader.moveNext())
            dict->put(reader.current());
    }

    dict->printStats(std::cout);
    delete dict;
}
