#include <string>
#include <vector>
#include <algorithm>
#include <cmath>
#include <iostream>

using namespace std;

string changeToTernary (int n) {
    string s = "";
    while(n != 0) {
        s += to_string(n%3);
        n = n / 3;
    }
    return s;
}

int changeToDecimal (string s) {
    int mul = 0;
    int decimal = 0;
    for(char c : s) {
        int num = c - '0';
        int num2 = pow(3, mul);
        decimal += num * num2;
        mul++;
    }
    return decimal;
}

int solution(int n) {
    string s = changeToTernary(n);
    reverse(s.begin(),s.end());
    return changeToDecimal(s);
}