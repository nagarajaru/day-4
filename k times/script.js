
   ANONYMOUS : (function(array , K) {
                             k = k % a.length;
                               if(k < 0){
                                 k += a.length;
                               }
   
                               reverse(a, 0, a.length - k - 1);
                               reverse(a, a.length - k, a.length - 1);
                               reverse(a, 0, a.length - 1);
                             } )
                             
      IIFE :   (function(array , k){
                             k = k % a.length;
                               if(k < 0){
                                 k += a.length;
                               }
   
                               reverse(a, 0, a.length - k - 1);
                               reverse(a, a.length - k, a.length - 1);
                               reverse(a, 0, a.length - 1);
                             })
                             