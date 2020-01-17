const findBinaryGaps = number => convertToBinary(number, getBinaryGaps);

const convertToBinary = (number, cb) => {
  const binary = number.toString(2);
  return cb(binary);
};

const getBinaryGaps = binary => {
  let gaps = [];
  let startsGap = false;
  let zerosSequence = 0;

  for (let i = 0; i < binary.length; i++) {
    const el = binary[i];
    if (el === "1" && zerosSequence === 0) startsGap = true;
    else if (el === "0" && startsGap) zerosSequence++;
    else if (el === "1" && startsGap && zerosSequence > 0) {
      gaps.push(zerosSequence);
      zerosSequence = 0;
      startsGap = false;
    }
  }

  return gaps.length > 0 ? Math.max(...gaps) : 0;
};

function solution(N) {
  const result = findBinaryGaps(N);
  return result;
}

solution(222);
