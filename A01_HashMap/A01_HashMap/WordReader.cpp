#include "stdafx.h"
#include "WordReader.h"
#include <fstream>

WordReader::WordReader(const char *const path)
    : WordReader(new std::ifstream(path))
{
}
WordReader::WordReader(std::istream *stream)
    : _input(stream)
{
    buff[0] = '\0';
}
WordReader::~WordReader()
{
    SafeDelete(_input);
}

const char *WordReader::current()
{
    return buff;
}
bool WordReader::moveNext()
{
    eatWhitespace();
    size_t q = 0;
    while (q < BUFFER_SIZE - 1)
    {
        auto chr = _input->get();
        if (chr == -1) break;
        if (chr == '\r' || chr == '\n' || chr == ' ' || chr == ',' || chr == '.' || chr == '"' || chr == '\'' || chr == '\0') break;
        buff[q] = static_cast<char>(chr);
        q++;
    }
    assert(q < BUFFER_SIZE - 1);
    buff[q] = '\0';
    return !is_empty(buff);
}

void WordReader::eatWhitespace()
{
    while (true) {
        auto chr = _input->peek();
        if (chr == '\r' || chr == '\n' || chr == ' ' || chr == ',' || chr == '.' || chr == '"' || chr == '\'') _input->get();
        else return;
    }
}
