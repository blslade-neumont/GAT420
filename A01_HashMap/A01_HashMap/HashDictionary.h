#pragma once
#include "IDictionary.h"
#include "LinkedList.h"

class HashDictionary: public IDictionary
{
public:
    HashDictionary();
    ~HashDictionary();

    static const unsigned BUCKET_COUNT = 100;

    virtual void put(const char *const word) override;
    virtual bool has(const char *const word) override;

private:
    unsigned hash(const char *const word);
    LLNode<const char> *_buckets[BUCKET_COUNT];
};
