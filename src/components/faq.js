import React, { useState, useEffect } from 'react';
import bulmaCollapsible from '@creativebulma/bulma-collapsible';

const QuestionTitle = ({copy}) => (
  <p className="is-size-5" style={{"border-bottom": "1px solid #F0814D", padding: "1rem 0"}}>
    {copy}
  </p>
)

const QuestionAnswer = ({copy}) => (
  <p style={{"padding-top": "1rem"}}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla aliquet leo ut egestas. Duis et urna sed massa consequat commodo vitae at massa. Integer mattis posuere interdum. Ut vitae ante at odio vulputate rutrum. Vestibulum ut vulputate metus. Integer posuere a urna ut dignissim. Sed enim nisl, consectetur non pellentesque eu, condimentum in turpis. Ut a hendrerit ligula.
  </p>
)

const Question = ({titleCopy, answerCopy, parent, childCount}) => (
  <div style={{"padding-bottom": "64px"}}>
    <a href={"#" + parent + "_collapsible-" + childCount} data-action="collapse">
      <QuestionTitle copy={titleCopy} />
    </a>
    <div id={parent + "_collapsible-" + childCount} className="is-collapsible" data-parent={parent} data-allow-multiple="true">
      <QuestionAnswer copy={answerCopy} />
    </div>
  </div>
)

function Faq() {
  useEffect(() => {
    const bulmaCollapsibleInstances = bulmaCollapsible.attach('.is-collapsible')
  });

  return (
    <div className="columns">
      <div id="plans_faq_left_column" className="column">
        <Question
          titleCopy="How does it work?"
          parent="plans_faq_left_column"
          childCount="1"
        />
        <Question
          titleCopy="How can an employee upgrade his plan?"
          parent="plans_faq_left_column"
          childCount="2"
        />
        <Question
          titleCopy="Am i being charged for employee addons?"
          parent="plans_faq_left_column"
          childCount="3"
        />
      </div>
      <div id="plans_faq_right_column" className="column">
        <Question
          titleCopy="How do I get started?"
          parent="plans_faq_right_column"
          childCount="1"
        />
        <Question
          titleCopy="How do I cancel my Subscription?"
          parent="plans_faq_right_column"
          childCount="2"
        />
        <Question
          titleCopy="What happens to my policies when i cancel?"
          parent="plans_faq_right_column"
          childCount="3"
        />
      </div>
    </div>
  );
}

export default Faq
