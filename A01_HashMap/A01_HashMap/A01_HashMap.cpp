#include "stdafx.h"

#include "HashDictionary.h"
#include "WordReader.h"

void testHash(std::function<int(const char*)> hashFn, bool printNewWords, bool printResults);

int main()
{
    std::cout << "Testing a 0-returning hash:" << std::endl << std::endl;
    testHash([](const char*) -> int
    {
        return 0;
    }, false, true);

    std::cout << std::endl << "Testing a first-character ascii value hash:" << std::endl << std::endl;
    testHash([](const char *word) -> int
    {
        return word == nullptr ? 0 : *word;
    }, false, true);

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
    }, false, true);

    std::cout << std::endl << "Testing a full-character ascii value sum hash:" << std::endl << std::endl;
    testHash([](const char *word) -> int
    {
        if (word == nullptr) return 0;
        int hash = 0;
        while (*word != '\0')
            hash += *(word++);
        return hash;
    }, false, true);

    std::cout << std::endl << "Testing an ascii value shift-xor hash:" << std::endl << std::endl;
    testHash([](const char *word) -> int
    {
        if (word == nullptr) return 0;
        int hash = 0;
        int shiftAmt = 0;
        while (*word != '\0')
            hash ^= *(word++) << shiftAmt++;
        return hash;
    }, false, true);

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
    }, false, true);

    pause();

    return 0;
}

void testHash(std::function<int(const char*)> hashFn, bool printNewWords, bool printResults)
{
    IDictionary *dict;
    dict = new HashDictionary(hashFn);

    {
        if (printNewWords) std::cout << "Reading in seed dictionary." << std::endl;
        WordReader reader("dict_seed.txt");
        while (reader.moveNext())
            dict->put(reader.current());
    }

    {
        if (printNewWords) std::cout << "Reading in check dictionary. The following words are new:" << std::endl;
        WordReader reader("dict_check.txt");
        while (reader.moveNext()) {
            if (!dict->put(reader.current()) && printNewWords)
                std::cout << reader.current() << std::endl;
        }
    }

    if (printResults) {
        if (printNewWords) std::cout << std::endl;
        dict->printStats(std::cout);
    }
}
