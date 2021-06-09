---
title: Taskbook
tags: ['tool']
slug: 'taskbook'
excerpt: 'Tasks, boards & notes for the command-line habitat'
published: May 23 2020
is_published: true
cover: '/imgages/taskbook/cover.png'
---

By utilizing a simple and minimal usage syntax, that requires a flat learning curve, taskbook enables you to effectively manage your tasks and notes across multiple boards from within your terminal. All data are written atomically to the storage in order to prevent corruptions, and are never shared with anyone or anything. Deleted items are automatically archived and can be inspected or restored at any moment.

## Features
<ul class="grid grid-cols-1 md:grid-cols-2 gap-2">
    <li>Organize tasks & notes to boards</li>
    <li>Board & timeline views</li>
    <li>Priority & favorite mechanisms</li>
    <li>Search & filter items</li>
    <li>Archive & restore deleted items</li>
    <li>Lightweight & fast</li>
    <li>Data written atomically to storage</li>
    <li>Custom storage location</li>
    <li>Progress overview</li>
    <li>Simple & minimal usage syntax</li>
    <li>Update notifications</li>
    <li>Configurable through ~/.taskbook.json</li>
    <li>Data stored in JSON file at ~/.taskbook/storage</li>
</ul>

## Installation

1. NPM
```bash
npm install --global taskbook
```

- Yarn
```bash
yarn global add taskbook
```

## Usage

### Create your first task

```bash
tb --task Read MyBook
```

> Note:
>
> You can add your task to an existing or new board

```bash
tb --task @books Read MyBook
```

**IMAGE alternate="Task Created"**

### Create your first Note

```bash
tb --note This is a note
```

> Note:
>
> You can add your note to an existing or new board

```bash
tb --note @books This is a note
```

### Change status of Task

#### Mark your task as in progress
Let's say I have started reading MyBook and I want to mark this task as in progress. To do this all you need to do is run:

```bash
tb --begin task_id
```
**IMAGE alternate="Task Progress"**

#### Mark your task as done
After a long and tiring read you finally finished your book and want to mark the task as done. All you need to is run:

```bash
tb --begin task_id
```

**IMAGE alternate="Task Done"**

#### Delete your Completed Tasks

```bash
tb --clear
```

#### Delete your Task

```bash
tb --delete task_id
```

> List Of Commands:
>
> You can find a list of all commands for taskbook [here](https://github.com/klaussinani/taskbook#usage)

## Views

Taskbook gives you 2 different views to view your tasks.

1. Board View

This option displays all saved items grouped into their respective boards.

```bash
tb
```

**IMAGE alternate="Task Done"**

2. Timeline View

This option displays all tasks in a timeline fashion, categorized by their creation date.

```bash
tb --timeline
```

**IMAGE alternate="Task Done"**

## Conclusion

Taskbook enables you to manage and track your tasks from command line. This helps you manage your tasks from terminal where we all developers spend our time. Having
