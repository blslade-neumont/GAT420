#pragma once

#include <iostream>
#include <functional>
#include <assert.h>
#include "targetver.h"

template <typename T>
void SafeDelete(T *&tptr)
{
    if (tptr != nullptr)
    {
        delete tptr;
        tptr = nullptr;
    }
}

unsigned parse_uint(const char *str, unsigned def);

bool are_same(const char *lhs, const char *rhs);
bool is_empty(const char *val);
unsigned str_length(const char *str);

void pause();
