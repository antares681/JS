def check(test_str):
    is_False = False
    for i in range(len(test_str)-1):
        if test_str[i] != test_str[i+1]:
            return 'false'
    return 'true'

test_str = '2222222'
print(check(test_str))
print(test_str)