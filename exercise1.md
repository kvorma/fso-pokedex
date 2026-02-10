*Language selected: Python*

# Comparison to JavaScript

- High level Tools (git, jenkins, etc.) are the same
- Both are well supported by various cloud services for both development and deployment

**However**

- different package managers (pip)
- different tools for lintin (pylint, Flake8 etc)
- different build steps (often not needed)
- different testing frameworks (pytest, unittest, playwright for python)

# Alternative (to GitHub/Jenkins) CI/CD platforms

- Cloud: Azure Devops, GitLab, Codeberg, CircleCI, AWS codepipeline, ...
- in-house: CircleCI, GitLab CI, Forgejo, ...
- Jenkins is the leader, but complex and showing its age

# How to choose the right platform?

- consider the big picture first - is your company happy to put its IP into cloud or has to keep in-house?
- do you prefer OPEX over CAPEX?
- do you have the expertize to manage CI/CD pipeline?
- security demands from customers / goverments
- ethical considerations (AI mining, host country legal/laws)
- in general, if you are small and fast go cloud whereas large organization have often resources to self host for better control
- Hybrid tools are available and should be considered


