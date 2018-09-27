module.exports = function count(s, pairs) {
    function getNOD(a,b){
        while(b){
            let c = a%b;
            a = b;
            b = c;
        }
        return a;
    }
    if(pairs[0][1]>=100000000)return 0;
    let N = 1;
    for(pair of pairs){
        N*=Math.pow(pair[0],pair[1]);
    }
    if(N>100000000)return 0;
    let k = 0;
    let res=0;
    while(k<N){
        let found = true;
        for(let j = 0;j<s.length;++j){
            if((getNOD(k+j,N)===1 && s[j]==='1') || (getNOD(k+j,N)!==1 && s[j]==='0')){
                continue;
            }
            else{
                found = false;
                break;
            }
        }
        if(found)++res;
        ++k;
    }
    return res;
}