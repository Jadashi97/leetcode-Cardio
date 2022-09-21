
nums = [1,2,3,1]
def ifAppearsTwice(nums):
    n = set()
    for i in nums:
        if i in  n:
            return True 
        else:
            return False
print(ifAppearsTwice(nums))

# Two sum problems
nums = [3,2,4]
target = 6
def twoSum(nums, target): # define a function
        hashMap = { } # create a hashmap

        for i, n in enumerate(nums): #iterate through the nums
            diff = target - n #find the diff btn the target and the num 
            if diff in hashMap: # if diff is in the hashmap
                return [hashMap[diff], i] #return the index alongside the diff
            hashMap[n] = i
        return
print(twoSum(nums, target))


