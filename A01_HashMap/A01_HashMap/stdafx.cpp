#include "stdafx.h"

unsigned parse_uint(const char *str, unsigned def)
{
    if (str == nullptr) return def;
    auto val = 0;
    while (*str != '\0')
    {
        if (*str < '0' || *str > '9') return def;
        val *= 10;
        val += *(str++) - '0';
    }
    return val;
}

bool are_same(const char *lhs, const char *rhs)
{
    if (lhs == rhs) return true;
    if (lhs == nullptr || rhs == nullptr) return false;
    while (*lhs != '\0' && *rhs != '\0')
    {
        if (*lhs != *rhs) return false;
        lhs++;
        rhs++;
    }
    return *lhs == *rhs;
}

bool is_empty(const char *val)
{
    return (val == nullptr || *val == '\0');
}

unsigned str_length(const char *str)
{
    if (str == nullptr) return 0;
    unsigned len = 0;
    while (*str != '\0') str++, len++;
    return len;
}

void pause()
{
    static thread_local char buff[256];
    std::cin.get(buff, sizeof(buff) / sizeof(buff[0]));
}
