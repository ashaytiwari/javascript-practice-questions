// fibonacci seq. upto n terms using loop
function fibonacciSeqUptoNTerms(n) {

  let n1 = 0, n2 = 1, nextTerm;

  for (let i = 1; i <= n; i++) {

    console.log(n1);

    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;

  }

}

fibonacciSeqUptoNTerms(10);

// fibonacci seq. upto certain number using loop
function fibonacciSeqUptoCertainNumber(n) {

  let n1 = 0, n2 = 1, nextTerm;

  for (let i = 1; i <= n; i++) {

    console.log(n1);

    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;

    if (n1 >= n) {
      break;
    }

  }
}

fibonacciSeqUptoCertainNumber(100);

// fibonacci seq. upto n terms using recursion
function fibonacciSeqUptoNTermsUsingRecursion(n) {

  let n1 = 0, n2 = 1;
  let index = 0;

  (function childRecursive() {
    console.log(n1);

    let nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    index++;

    if (index >= n) {
      return;
    }

    childRecursive(n1, n2);

  })();
}

fibonacciSeqUptoNTermsUsingRecursion(10);

// fibonacci seq. upto certain number using recursion
function fibonacciSeqUptoCertainNumberUsingRecursion(n) {

  let n1 = 0, n2 = 1;

  (function childRecursive() {
    console.log(n1);

    let nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;

    if (n1 >= n) {
      return;
    }

    childRecursive(n1, n2);

  })();

}

fibonacciSeqUptoCertainNumberUsingRecursion(144);