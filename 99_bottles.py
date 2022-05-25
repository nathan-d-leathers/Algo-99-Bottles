def bottle_song(num):
    # write your code here!
   
    bottleCount = "bottles"
    while num >= 2:
        if num == 2:
            bottleCount = "bottle"
        newNum = num-1
        print(f"{num} bottles of beer on the wall, {num} bottles of beer. Take one down and pass it around, {newNum} {bottleCount} of beer on the wall.")
        num -= 1
    if num == 1:
        return(f"""1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall. 
No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.""")


print(bottle_song(10))
