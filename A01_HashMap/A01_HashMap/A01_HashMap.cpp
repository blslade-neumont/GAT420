#include "stdafx.h"

#include "HashDictionary.h"
#include "WordReader.h"

int main()
{
    IDictionary *dict;
    dict = new HashDictionary();

    {
        std::cout << "Reading in seed dictionary." << std::endl;
        WordReader reader("dict_seed.txt");
        while (reader.moveNext())
        {
            dict->put(reader.current());
        }
    }

    {
        std::cout << "Reading in check dictionary. The following words are new:" << std::endl;
        WordReader reader("dict_check.txt");
        while (reader.moveNext()) {
            if (!dict->has(reader.current()))
            {
                std::cout << reader.current() << std::endl;
                dict->put(reader.current());
            }
        }
    }

    pause();

    return 0;
}
