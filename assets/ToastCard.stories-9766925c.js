import{j as e}from"./jsx-runtime-b7c78c49.js";import{c as r}from"./index-0637bbae.js";import{r as g}from"./index-a06da399.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-042e6b4d.js";const y={title:"Data Display/Toast Card",component:r,tags:["autodocs"],decorators:[(T,d)=>{const{title:c,description:p,onRequestToClose:l}=d.args,[o,m]=g.useState(!1),s=()=>{m(!o)};return e.jsxs("main",{style:{height:200,width:800},children:[e.jsx("button",{type:"button",onClick:s,children:"Toogle Toast"}),o&&e.jsx(r,{title:c,description:p,onRequestToClose:u=>{s(),l(u)}})]})}],argTypes:{onRequestToClose:{action:"onRequestToClose"},title:{description:"Heading text"},description:{description:"Paragraph text"}}},t={args:{title:"Agendamento Realizado 2",description:"Quarta-feira, 23 de outubro as 16h"}};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    title: 'Agendamento Realizado 2',
    description: 'Quarta-feira, 23 de outubro as 16h'
  }
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const j=["Primary"];export{t as Primary,j as __namedExportsOrder,y as default};
//# sourceMappingURL=ToastCard.stories-9766925c.js.map
