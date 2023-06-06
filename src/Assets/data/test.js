/* The relation is like below data */
const data = [
  {
    id: 1,
    parent_id: null,
    name: "Account Resource",
    children: [
      {
        id: 2,
        parent_id: 1,
        name: "Activate",
        children: [
          {
            id: 255,
            parent_id: 2,
            name: "Child Activate",
            children: [
              {
                id: 256,
                parent_id: 255,
                name: "Grand Child Activate",
                children: [
                  {
                    id: 257,
                    parent_id: 256,
                    name: "Grand Grand Child Activate",
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 3,
        parent_id: 1,
        name: "Authenticate",
        children: [],
      },
      {
        id: 4,
        parent_id: 1,
        name: "Account",
      },
    ],
  },
];

/* selectedIds = [1,2,255,256,257,3,4,5,7,8,9] 
The problem is if i run removeGrandParent(255), the selectedIds become [3,4,5,7,8,9] but it should be [256,257,3,4,5,7,8,9]

*/

{
}
