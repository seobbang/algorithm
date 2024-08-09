#include <string>
#include <unordered_map>

using namespace std;

unordered_map<string, string> wordMap = {
    {"zero", "0"},
    {"one", "1"},
    {"two", "2"},
    {"three", "3"},
    {"four", "4"},
    {"five", "5"},
    {"six", "6"},
    {"seven", "7"},
    {"eight", "8"},
    {"nine", "9"}
};

int solution(string s) {    
    string answer = "";    
    string curWord = "";
    
    for(char c : s){
        // 숫자일 때
        if(isdigit(c) != 0){
            answer += c;
        }
        // 영단어일 때
        else {
            curWord += c;
            auto it = wordMap.find(curWord);
            if(it != wordMap.end()){
                answer += it->second;
                curWord = "";
            }
        }
    }
    
    return stoi(answer);
}