export const sortByDate = (a, b) => {
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  }

  //'a'  and 'b'  here represent to show the order like assending or desending. Here is desending means latest will be showen on the top and oldes on the last. 
  //The order can be change by the replaceing the place of a and b to each other