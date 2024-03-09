import { View, ScrollView , StyleSheet} from 'react-native'
import React, { PropsWithChildren } from 'react'
import Markdown from 'react-native-markdown-display';



const copy = `# h1 Heading

**This is some bold text!**

This is normal text

## Another Heading

- List item 1
- List item 2
- List item 3

#### Code Blocks

\`\`\`
  console.log(Muky coding here!)
\`\`\`
### Subheading

1. Numbered item 1
2. Numbered item 2
3. Numbered item 3

#### Sub-subheading

> This is a blockquote.

\`\`\`javascript
// This is a code block
function greet() {
  console.log('Hello, world!');
}
greet();
\`\`\`

![Image](https://via.placeholder.com/150)

[Link](https://www.example.com)

`;


export default function MarkDownDisplayCom({ children } : PropsWithChildren) {
  return (
    <ScrollView style={styles.page}>
       <Markdown
         style={markDownStyle}
         >
            {children}
          </Markdown>
    </ScrollView>
  )
}

const markDownStyle = StyleSheet.create({
  heading1: {
    color: '#212020',
    fontFamily: 'inter',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom:10,
  lineHeight:40,
  },

  heading2 :{
    fontFamily: 'interBold',
    fontSize : 16,
    marginTop:10,
    marginBottom:5,
    lineHeight:40,
  },

  body: {
    // fontFamily: 'inter',
    // color: 'red',
     fontSize: 16,
     lineHeight:20,

    },
    code_block: {color: 'black', fontSize: 14}
})

const styles = StyleSheet.create({
  page:{
    backgroundColor: 'white',
    flex:1,
    padding:10,
  },
 

})