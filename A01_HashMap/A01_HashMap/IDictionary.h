#pragma once

class IDictionary {
public:
    IDictionary();
    ~IDictionary();

    virtual void put(const char *const word) = 0;
    virtual bool has(const char *const word) = 0;
};
