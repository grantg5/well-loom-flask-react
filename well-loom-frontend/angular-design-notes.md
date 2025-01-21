# Folder Structure
The app is broken into core, features, and shared.

Core = Components (pages, components, widgets) that are feature-agnostic. Ex. about page, header.

Features = App features. Folders within are named for each feature (ex. the practice library)

Shared = Files that are shared across app. Ex. appTheme.scss

# Component Architecture
Components fall into three categories, pages, widgets and components.

A page defines the highlevel scaffolding and layout of a page, a page is the only Angular component coupled to a route (if routing is used). It orchestrates components, passing data between them as-needed. Ex. practice search.

A component is a defined, reusable piece of a page, which does the querying and/or writing. Ex. the area where pratice search results is shown

A widget is usually built from pure components, with data passed in or out, representing one piece of UI/logic. Ex. a card that displays short info for a practice.