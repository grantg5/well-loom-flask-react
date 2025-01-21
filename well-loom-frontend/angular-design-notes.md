# Folder Structure
The app is broken into core, features, and shared.

Core = Components (pages, components, widgets) that are feature-agnostic. Ex. about page, header.

Features = App features. Folders within are named for each feature (ex. the practice library)

Shared = Files that are shared across app. Ex. appTheme.scss

# Component Architecture
Components fall into three categories, pages, widgets and components.

A page defines the highlevel scaffolding and layout of a page, a page is the only Angular component coupled to a route (if routing is used), and has a almost no logic. Ex. practice search.

A component is a pure component, meaning it only takes in information, and has no dependencies on data structures except its own model. Ex. the area where pratice search results is shown

A widget is usually build from pure components, and is responsible for its own data collection. So it can be used without any inputs or outputs. Ex. a card that displays short info for a practice.