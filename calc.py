#imports
from datetime import date
import random
import os

#globals
option = ''
good_bye = ["Good Byte","Good Bye","See You Later","Talk to You Later","It Was Nice Meeting You"]
number1=0
number2=0

#functions
def clear():
    return os.system('cls' if os.name == 'nt' else 'clear')

def print_menu():
    print("\n-----------------------------")
    print("** Python Money Calculator **")
    print("-----------------------------")
    print("     [1] Sum")
    print('     [2] Subtract')
    print('     [3] Multiply')
    print('     [4] Divide')
    print("     [q] Quit")
    print("\n     Bonus:")
    print('     [5] Find Out Your Age')
    print('     [6] How Much to Tip')

    opc = input("\nPlease select an option: ")
    return opc

def display_results(x, num1, symbol, num2, res):
    print("\nThe two numbers that you wanted to %s: "%(x))
    print("$%.2f %s $%.2f = $%.2f"%(num1, symbol, num2, res))

def valid_date(num1,num2,label):
    is_valid=True
    example=''
    if(label == "day"):
        example="(DD)"
    else:
        example="(MM)"
    while(is_valid):
        try:
            temp = int(input("What is your birth %s %s:"%(label,example)))
            if(temp < num1 or temp > num2):
                print("\nInput needs to be between [%s-%s]"%(num1,num2))
                continue
            is_valid=False
        except:
            print("*** ERROR *** Invalid input: Try a number")
    return temp

def find_age():
    current_year=date.today().year
    current_month=date.today().month
    current_day=date.today().day
    header("Find Out Your Age")
    try:
        year=int(input("\nWhat is your birth year: "))
        month=valid_date(1,12,"month")  
        day=valid_date(1,31,"day")
        ans = current_year - year

        if( month > current_month):#not your birthday for this year yet
            ans = ans - 1
        elif ( month == current_month):
            if ( day > current_day): #not your birthday yet
                ans = ans -1
            elif ( day == current_day): #your birthday
                print("\nHAPPY BIRTHDAY!")
        print("You entered: %s-%s-%s"%(year,month,day))
        print("\nYour age is: %s"%ans)
    except:
        print("\n***Error*** needs to be either YYYY or MM or DD")
    enter_and_clear()

def enter_and_clear():
    wait=input("\nPress Enter to continue... ")
    clear()


def how_much_to_tip():
    header("How Much to Tip")
    percent=.15
    try:
        total = float(input("Enter total amount: "))
        print(total)
        ans = total * percent
        display_results("multiply", total, "*", percent, total*percent)
    except:
        print("\n *** Error *** Try using a number")
    enter_and_clear()

def take_in_info(text):
    clear()
    header(text)
    global number1 
    number1 = float(input("Provide Num 1: "))
    global number2
    number2 = float(input("Provide Num 2: "))

def header(text):
    print("You selected option ***%s***"%text)

#instructions
clear()
option=''
while( option != 'q'):
    option=print_menu()
    if(option == 'q' or option == 'Q'):
        break
    elif(option=='5'):
        clear()
        find_age()    
        continue
    elif(option=='6'):
        clear()
        how_much_to_tip()
        continue

    try:
        clear()
        
        if(option == '1'):
            take_in_info("SUM")
            display_results("add", number1, "+", number2, number1+number2)
        elif(option == '2'):
            take_in_info("SUBTRACT")
            display_results("subtract", number1, "-", number2, number1-number2) 
        elif(option == '3'):
            take_in_info("MULTIPLY")
            display_results("multiply", number1, "*", number2, number1*number2)
        elif(option=='4'):
            take_in_info("DIVIDE")
            try:
                display_results("divide", number1, "/", number2, number1/number2)
            except ZeroDivisionError:
                print("\n***ERROR*** can not divide by 0.")
        else:
            print("\nInvalid option. Try again!")
    except:
        print("\n**Error, unable to execute option %s. Try again!"%option)

    enter_and_clear()
    
print("\n%s"%random.choice(good_bye))
input("\n\n\nPress Enter to Quit")
clear()


