# Folder Structure
https://malshani-wijekoon.medium.com/spring-boot-folder-structure-best-practices-18ef78a81819

# Endpoint design
- CRUD endpoints for each table

# Hibernate Learning Notes
- Can put queries in a Queries interface w/ @HQL annotations for each query function, then call them via Queries_.functionName to improve type safety

- Entity classes have to @Override equals() and hashCode(), entities should be represented as Sets when properties (elimniates duplication concern)

- One to many & many to one associations are annotations in Hibernate. Have to map both sides (ex. @OneToMany on child property from parent, and @ManyToOne on child's reference to parent)

-- Hibernate recommends keeping mapping tables as seperate entities (I'll store them in seperate folder), so that columns of the mapping tables themselves (isActive, created & updated, etc.) are maintained

-- To represent these relationships, create @OneToMany mappings to the mapping table in both entities (ex. User { @OneToMany(mappedBy=users prop in mapping table) userPractices }, Practice { @OneToMany(mappedBy = practices prop in mapping table) practiceUsers}). Then create @ManyToOne mappings for each table in the mapping entity (ex. UserPracticesMapping { @ManyToOne(name="practiceId") practices, @ManyToOne(name="userId" users)})

- @Column useful on properties to map to associated table column (can use unique=true or uniqueconstraints for multi-column constraints)

- Use Session to interact w/ DB