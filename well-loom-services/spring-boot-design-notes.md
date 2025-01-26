# Folder Structure
https://malshani-wijekoon.medium.com/spring-boot-folder-structure-best-practices-18ef78a81819

# Endpoint design
- CRUD endpoints for each table

# Hibernate Learning Notes
- Can put queries in a Queries interface w/ @HQL annotations for each query function, then call them via Queries_.functionName to improve type safety

-- Once done so, call these w/ any of the following exicutions: getResultList(), getSingleResult(), or getSingleResultOrNull(), executeUpdate()

- Entity classes have to @Override equals() and hashCode(), entities should be represented as Sets when properties (elimniates duplication concern)

- One to many & many to one associations are annotations in Hibernate. Have to map both sides (ex. @OneToMany on child property from parent, and @ManyToOne on child's reference to parent)

-- Hibernate recommends keeping mapping tables as seperate entities (I'll store them in seperate folder), so that columns of the mapping tables themselves (isActive, created & updated, etc.) are maintained

-- To represent these relationships, create @OneToMany mappings to the mapping table in both entities (ex. User { @OneToMany(mappedBy=users prop in mapping table) userPractices }, Practice { @OneToMany(mappedBy = practices prop in mapping table) practiceUsers}). Then create @ManyToOne mappings for each table in the mapping entity (ex. UserPracticesMapping { @ManyToOne(name="practiceId") practices, @ManyToOne(name="userId" users)})

- @Column useful on properties to map to associated table column (can use unique=true or uniqueconstraints for multi-column constraints)

- Use Session to interact w/ DB
-- I'm responsible for handling session persistence, opening, using to fetch, and closing the session for each transaction

- Fetch everything you need up front whenever possible

- Use subgraphs when fetching something that'll need data from a joined entity, to avoid making another trip back to the DB for said entity. Ex below loads Authors & Publisher entities as well associatd w/ book:
  
var graph = session.createEntityGraph(Book.class);
graph.addSubgraph(Book_.publisher);
graph.addPluralSubgraph(Book_.authors).addSubgraph(Author_.person);
Book book = session.byId(Book.class).withFetchGraph(graph).load(bookId);
