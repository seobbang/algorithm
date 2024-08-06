#include <string>
#include <vector>

using namespace std;

vector<string> change(string s) {
    vector<string> v;
    
    // remove zero
    string newString = "";
    int zeroCount = 0;
    
    for(char c : s) {
        if(c == '1') newString += "1";
        else zeroCount++;
    }
    
    // change to binary
    int num = newString.length();
    newString = "";
    while(true){
        newString += to_string(num % 2);
        num /= 2;
        if(num == 0) break;
    }
    
    //return
    v.push_back(to_string(zeroCount));
    v.push_back(newString);
    
    return v;
}

vector<int> solution(string s) {
    vector<int> answer;
    int changeCount = 0;
    int zeroCount = 0;
    
    while(s != "1"){
        vector<string> res = change(s);
        s = res[1];
        zeroCount += stoi(res[0]);
        changeCount++;
    }
    
    answer.push_back(changeCount);
    answer.push_back(zeroCount);
    
    return answer;
}