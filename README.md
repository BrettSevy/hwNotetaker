# Homework: Note Taker

As a user you are able to write and save notes, delete notes I've written before, so that I can organize my thoughts and keep track of tasks I need to complete

## Description

this is an application that can be used to write, save, and delete notes. This application uses an express backend and save and retrieve note data from a JSON file. The application has a `db.json` file on the backend that is used to store and retrieve notes. Posting will recieve a new note to save on the request body, add it to the `db.json` file, and then return the new note. then delete that tasks that are completed.
