/**
 * Problem: https://leetcode.com/discuss/interview-question/4147887/AMAZON-OA-oror-AWS/
 * Step 1. Find the maximum priority shared by at least 2 processes. Let that be denoted by p. If there is no such priority or p = 0, the algorithm is terminated
 * Step 2. Otherwise, select the two of the processes with the lowest indexes and priority p, and call them process1 and process2.
 * Step 3. The server executes process1 and removes it from the queue.
 * Step 4. To avoid starvation, it reduces the priority of process2 to the floor(p/2).
 * Step 5. Start again from step 1.
 */

const getPrioritiesAfterExecution = (priorities) => {
    const sorter = (a,b) => b-a;

    const findMaxPriorities = (allPriorities) => {
        allPriorities.sort(sorter);
        for(let i =0; i< allPriorities.length; i++) {
            if(allPriorities[i] === allPriorities[i+1]) {
                return [i, i+1];
            }
        }
        return [-1,-1];
    }

    while(true) {
        const [priorityIndex1, priorityIndex2] = findMaxPriorities(priorities);
        if(priorities[priorityIndex1] <= 0) {
            console.log('done');
            break;
        }
        priorities[priorityIndex1] = -1;
        priorities[priorityIndex2] = Math.floor(priorities[priorityIndex2]/2);
    }

    return priorities.filter(p => p > -1);
}


// Test cases
const TEST_CASES = [{input:[6,6,6,1,2,2], output:[3,6,0]}];

for(const {input, output} of TEST_CASES) {
    const answer = getPrioritiesAfterExecution(input).join('');
    const expected = output.sort((a,b) => b-a).join('');
    if( answer !== expected) {
        console.log('test failed');
    } else {
        console.log('test success');
    }
}