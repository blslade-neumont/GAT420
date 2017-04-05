#pragma once
#include "IDictionary.h"
#include "LinkedList.h"
#include <ostream>

class HashDictionary: public IDictionary
{
public:
    HashDictionary(std::function<int(const char*)> hashFn, unsigned tableSize);
    ~HashDictionary();

    virtual bool put(const char *const word) override;
    virtual bool has(const char *const word) override;

    virtual unsigned count() override;
    virtual unsigned duplicateCount() override;

    virtual void printStats(std::ostream &out) override;

private:
    static const unsigned CLONE_BUFFER_SIZE = 100000;
    unsigned _cloneBufferPos;
    char _cloneBuffer[CLONE_BUFFER_SIZE];
    const char *const str_clone(const char *word);

    unsigned _tableSize;
    LLNode<const char> **_buckets;

    unsigned _duplicates;
    unsigned _count;

    std::function<int(const char*)> _hashFn;
};
