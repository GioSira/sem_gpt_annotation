import React from "react";

function Example() {
    return (
        <div>
            <div className="text-4xl font-bold">Some Examples of annotation</div>
            <div>

                <div className="text-2xl mt-4">Correct Concept</div>
                <p className="mt-2">
                    For instance, given the sentence
                    <ul>
                        <li><i>wood</i> [is/are] used for toy</li>
                    </ul>
                    the answer is <b>Yes</b> because <b>wood</b> could be used to make a toy.
                </p>

                <div className="text-2xl mt-4">Incorrect Concept</div>
                <p className="mt-2">
                    For instance, given the sentence
                    <ul>
                        <li><i>coffee</i> [is/are] used for toy</li>
                    </ul>
                    the answer is <b>No</b> because the <b>coffee</b> cannot be used to make toys.
                </p>

                <div className="text-2xl mt-4">Wrong Concept</div>
                <p className="mt-2">
                    At any point during the annotation task, you can mark a concept as "<i>wrong</i>" if you
                    find it erroneous. For instance, given the triplet
                    <ul>
                        <li><i>this kind of wood</i> [is/are] used for toy</li>
                    </ul>
                    will be labeled as <b>wrong</b> because "<b>this kind of wood</b>" is a text fragment.
                </p>

            </div>
        </div>
    );
}

export default Example;