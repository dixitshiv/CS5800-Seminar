// 746. Min Cost Climbing Stairs

/*
You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.
*/

// Link - https://leetcode.com/problems/min-cost-climbing-stairs/description/

function minCostClimbingStairs(cost) {
  const n = cost.length;
  let prevPrevCost = cost[0];
  let prevCost = cost[1];

  for (let i = 2; i < n; i++) {
    const currentCost = cost[i] + Math.min(prevPrevCost, prevCost);
    prevPrevCost = prevCost;
    prevCost = currentCost;
  }

  return Math.min(prevPrevCost, prevCost);
}

console.log(minCostClimbingStairs([10, 15, 20]));
