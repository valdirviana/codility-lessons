const solution = (A, K) => {
  for (let i = 0; i < K; i++) {
    A = [A[A.length - 1], ...A.slice(0, A.length - 1)];
  }
  return A;
};

exports.solution = solution;
