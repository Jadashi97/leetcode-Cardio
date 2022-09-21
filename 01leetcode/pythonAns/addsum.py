'''
#ADD SUM questions
#Q1

class Solution:
    def addTwoNumbers(self, l1:Listnode, l2:ListNode) -> Listnode:
        dummy = ListNode()
        cur = dummy 

        carry = 0
        while l1 or l2 or carry :
            v1 = l1.val if l1 else 0
            v2 = l2.val if l2 else 0

            val = v1 + v2 + carry
            carry = val // 10
            val = val % 10
            cur.next = Listnode(val)
            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None

        return dummy.next
'''


#Q 217
nums = [1,2,1,3,4]
def findDuplicate(nums):
    hashset = set()
    for i in nums:
        if i in hashset:
            return True
        hashset.add(i)
            
    else:
        return False
print(findDuplicate(nums))


    
