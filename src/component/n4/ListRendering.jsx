import React from "react";

export default function ListRendering() {
    const list1 = ["A", "B", "C"];
    const list2 = [
        {id: 0, name: "A"},
        {id: 1, name: "B"},
        {id: 2, name: "C"}
    ];

    return (
        <div>
            <h6>List with native array index</h6>
            {list1.map((element, index) => <p key={index}>[Id: {index}, Name: {element}]</p>)}
            <h6>List with dedicated index</h6>
            {list2.map(element => <p key={element.id}>[Id: {element.id}, Name: {element.name}]</p>)}
        </div>
    );
}
