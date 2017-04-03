#pragma once

template <typename T>
class LLNode
{
public:
    LLNode(T *val)
        : _value(val), _next(nullptr)
    {
    }
    ~LLNode()
    {
        SafeDelete(_value);
        SafeDelete(_next);
    }

    T *value()
    {
        return _value;
    }

    LLNode<T> *next()
    {
        return _next;
    }
    void setNext(LLNode<T> *next)
    {
        _next = next;
    }
    void insertNext(LLNode<T> *next)
    {
        next->setNext(_next);
        _next = next;
    }

private:
    T *_value;
    LLNode<T> *_next;
};
