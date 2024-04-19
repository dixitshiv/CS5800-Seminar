// 1423. Maximum Points You Can Obtain from Cards

/* 
There are several cards arranged in a row, and each card has an associated number of points. The points are given in the integer array cardPoints.

In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.

Your score is the sum of the points of the cards you have taken.

Given the integer array cardPoints and the integer k, return the maximum score you can obtain.
*/

// Link - https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/description/

function maxScore(cardPoints, k) {
  let len = cardPoints.length;
  let l = 0;
  let r = len - k;
  let total = 0;

  for (let i = r; i < len; i++) {
    total += cardPoints[i];
  }

  let res = total;

  while (r < len) {
    total += cardPoints[l] - cardPoints[r];
    res = Math.max(res, total);
    l++;
    r++;
  }
  return res;
}

console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3));
