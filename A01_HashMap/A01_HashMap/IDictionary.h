#pragma once

class IDictionary {
public:
    IDictionary();
    ~IDictionary();

    virtual bool put(const char *const word) = 0;
    virtual bool has(const char *const word) = 0;

    virtual unsigned count() = 0;
    virtual unsigned duplicateCount() = 0;

    virtual void printStats(std::ostream &out) = 0;
};
