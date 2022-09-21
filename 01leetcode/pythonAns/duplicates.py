# question 3. longest substring without repeating characters

from email import charset


s = "abcabcbb"
def lengthOfLongestSubstring(self,s:str)->int:
    charset = set()
    l = 0
    res = 0

    for r in range(len(s)):
        while s[r] in charset:
            charset.remove(s[1])
            l += 1
            charset.add(s[r])
            res = max(res, r-1 + 1)

    return res