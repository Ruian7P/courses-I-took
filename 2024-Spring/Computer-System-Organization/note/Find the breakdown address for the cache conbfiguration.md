- **Cache Address**
  - tag | set index | block offset
  - example:
    - 32 bit address
    - 32K cache
    - 4-way set associative cache
    - 32-byte blocks
  - Find breakdown of the address for the cache configuration
  - 1. **Find max block offset**: 32-byte block --> 2^5, 5 bits
    2. **Find the number of blocks**: cache size: 32*1024 bytes, each block is 32 bytes --> 32*1024/32 = 1024 blocks
    3. **Find the number of sets** : each set has 4 blocks --> 1024/4 = 256 sets --> 2^8, 8 bits
    4. **Find the bit size of tag**: 32 bit address with 5 bit of block offset and 8 bit of set --> 19 bits for tag;
  - **Result**: 19 bit Tag, 8 bit Set index, 5 bit block offset
