#include <string>
#include <iostream>
#include <stack>

using namespace std;

bool solution(string s)
{
    bool answer = true;
    stack<int> stack;

    for(char c : s) {
        // "(" 일 때
        if(c == '(') {
            stack.push(c);
        }
        // ")" 일 때
        else if(c == ')'){
            if(!stack.empty()) stack.pop();
            else {
                answer = false;
                break;
            }
        }
    }
    
    if(!stack.empty()) answer = false;

    return answer;
}