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
        //SafeDelete(_value);
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

    unsigned count()
    {
        auto self = this;
        unsigned count = 0;
        while (self != nullptr)
        {
            count++;
            self = self->next();
        }
        return count;
    }

private:
    T *_value;
    LLNode<T> *_next;
};
