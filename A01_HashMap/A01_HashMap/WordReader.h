#pragma once
#include <istream>

class WordReader
{
public:
    WordReader(const char *const path);
    WordReader(std::istream *stream);
    ~WordReader();

    const char *current();
    bool moveNext();
    
private:
    static const unsigned BUFFER_SIZE = 128;
    char buff[BUFFER_SIZE];
    std::istream *_input;

    void eatWhitespace();
};
