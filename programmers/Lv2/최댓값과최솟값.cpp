#include <string>
#include <vector>
#include <sstream>
#include <iostream>
#include <algorithm>

using namespace std;

string solution(string s) {
    string answer = "";
    
    stringstream stringArr(s);
    vector<int> numberArr;
    
    int num;
    while(stringArr >> num) {
        numberArr.push_back(num);
    }
    
    sort(numberArr.begin(), numberArr.end());
    answer = to_string(numberArr[0]) + " " + to_string(numberArr[numberArr.size()-1]);
    
    return answer;
}