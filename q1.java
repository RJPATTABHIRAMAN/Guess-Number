class q1 {
    public static void main(String[] args) {
                   int n=4;
                   int sum=0;
                   for(int i=1;i<=n;i++){
                       for(int j=1;j<=i;j++){
                           if(i%j==0){
                               sum+=j;
                           }
                       }
                     
                   }
         System.out.print(sum);
    }
}