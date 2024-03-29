import React from "react";

function Disclaimer() {
    return (
        <div>
            <div className="text-4xl font-bold">Correct or Incorrect Concept?</div>
            <div>
                <div className="text-2xl mt-4">Scope of this annotation task</div>
                <p className="mt-2">
                    The goal of this task is simply to evaluate if Large Language Models are able to
                    generate a correct concept given a semantic relation.
                </p>
                <div className="text-2xl mt-4">What are you going to do?</div>
                <p className="mt-2">
                    In this annotation task, you will be given a concept to evaluate. Your job is
                    to decide whether the concept satisfy the semantic relation.
                </p>
                <p className="mt-2">
                    At any point during the annotation task, you can mark a concept as "<i>wrong</i>" if you
                    find it erroneous. An erroneous concept could be a truncated word (e.g., "t-shi"), a fragment
                    of text (e.g., "that satisfy the"), or a fake word (e.g., "coucticanitic").
                </p>
                <p className="mt-2">
                    You will need to complete <b>300</b> of these <b>annotations</b>, which should take about
                     <b>30 minutes</b>. It's important to note that this task
                    does not evaluate your knowledge of English, so you don't need to worry about being tested. If
                    you need more information about the word, you can use the internet to help you.
                </p>
            </div>
        </div>
    );
}

export default Disclaimer;