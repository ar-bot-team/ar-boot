exports.processList = {
 "data": [
   {
     "type": "process",
     "id": "2699d5ac-b3a2-43fe-82ab-4e074cbd53f5",
     "attributes": {
       "name": "Proceso Deshawn Miller",
       "description": null,
       "created_at": {
         "date": "2016-12-15 17:33:09.000000",
         "timezone_type": 3,
         "timezone": "UTC"
       },
       "updated_at": {
         "date": "2016-12-15 17:33:09.000000",
         "timezone_type": 3,
         "timezone": "UTC"
       },
       "parent_process_id": null,
       "status": "DISABLED",
       "type": "SUB_PROCESS",
       "duration_by": "CALENDAR_DAYS",
       "assignment": false,
       "design_access": "PUBLIC",
       "show_map": false,
       "show_message": true,
       "show_delegate": false,
       "show_dynaform": false,
       "category_id": "308c68ca-33b7-47d1-8528-094e955afd6e",
       "sub_category_id": "403e11ba-79b1-46e1-bdf5-6b9c658abec5",
       "create_user_id": "41b2cac5-5d8d-421e-8ddd-1712bf8b6b92",
       "debug": true,
       "dynaform_summary_id": null,
       "derivation_screen_tpl": null,
       "calendar_id": "5b9a04a0-1d4c-4d7b-84f4-02860af9496f"
     }
   },
   {
     "type": "process",
     "id": "3fe93d3a-7427-4e4a-b0bc-638577e90ddd",
     "attributes": {
       "name": "Proceso Miss Adelia Bogisich",
       "description": null,
       "created_at": {
         "date": "2016-12-15 17:33:21.000000",
         "timezone_type": 3,
         "timezone": "UTC"
       },
       "updated_at": {
         "date": "2016-12-15 17:33:21.000000",
         "timezone_type": 3,
         "timezone": "UTC"
       },
       "parent_process_id": null,
       "status": "INACTIVE",
       "type": "SUB_PROCESS",
       "duration_by": "CALENDAR_DAYS",
       "assignment": true,
       "design_access": "PRIVATE",
       "show_map": false,
       "show_message": false,
       "show_delegate": true,
       "show_dynaform": true,
       "category_id": "69e24bc5-60ff-48fd-a1a9-d730d4eca036",
       "sub_category_id": "cbff5d47-ab62-4bac-a64a-b0b0597df289",
       "create_user_id": "c7cf9b9c-97f4-4f65-86e3-09af9988c904",
       "debug": false,
       "dynaform_summary_id": null,
       "derivation_screen_tpl": null,
       "calendar_id": "bd3e7b45-653b-408c-b17b-6e3aa9c6b361"
     }
   }
 ],
 "meta": {
   "pagination": {
     "total": 2,
     "count": 2,
     "per_page": 15,
     "current_page": 1,
     "total_pages": 1,
     "links": []
   }
 }
};


exports.processCanStart =
  [
  {
    "id": 4,
    "uid": "76dd5666-358c-4312-9c79-705c0d781169",
    "process_id": 13,
    "type": "SCRIPT-TASK",
    "assign_type": "BALANCED",
    "priority_variable": null,
    "assign_variable": null,
    "group_variable": null,
    "mi_instance_variable": null,
    "mi_complete_variable": null,
    "transfer_fly": false,
    "can_upload": false,
    "view_upload": false,
    "view_additional_documentation": false,
    "start": false,
    "send_last_email": true,
    "derivation_screen_tpl": null,
    "selfservice_timeout": 0,
    "selfservice_time": null,
    "selfservice_time_unit": null,
    "selfservice_execution": null,
    "last_assigned_user_id": null,
    "script": null,
    "created_at": "2016-12-15 21:23:51",
    "updated_at": "2016-12-15 21:23:51",
    "process": {
      "name": "Sequence Flow",
      "description": null
    },
    "task": {
      "id": 7,
      "task_id": 4,
      "locale": "es",
      "name": "Start",
      "description": null
    }
  },
  {
    "id": 6,
    "uid": "60f523fe-d8e7-48ff-b498-4c9531b7288f",
    "process_id": 14,
    "type": "SCRIPT-TASK",
    "assign_type": "BALANCED",
    "priority_variable": null,
    "assign_variable": null,
    "group_variable": null,
    "mi_instance_variable": null,
    "mi_complete_variable": null,
    "transfer_fly": false,
    "can_upload": false,
    "view_upload": false,
    "view_additional_documentation": false,
    "start": false,
    "send_last_email": true,
    "derivation_screen_tpl": null,
    "selfservice_timeout": 0,
    "selfservice_time": null,
    "selfservice_time_unit": null,
    "selfservice_execution": null,
    "last_assigned_user_id": null,
    "script": null,
    "created_at": "2016-12-15 21:24:06",
    "updated_at": "2016-12-15 21:24:06",
    "process": {
      "name": "Sequence Flow",
      "description": null
    },
    "task": {
      "id": 9,
      "task_id": 6,
      "locale": "es",
      "name": "Start",
      "description": null
    }
  },
  {
    "id": 9,
    "uid": "3090cc0d-87ed-405a-b09e-c1eeddacf9e6",
    "process_id": 15,
    "type": "NORMAL",
    "assign_type": "BALANCED",
    "priority_variable": null,
    "assign_variable": null,
    "group_variable": null,
    "mi_instance_variable": null,
    "mi_complete_variable": null,
    "transfer_fly": false,
    "can_upload": false,
    "view_upload": false,
    "view_additional_documentation": false,
    "start": false,
    "send_last_email": true,
    "derivation_screen_tpl": null,
    "selfservice_timeout": 0,
    "selfservice_time": null,
    "selfservice_time_unit": null,
    "selfservice_execution": null,
    "last_assigned_user_id": null,
    "script": null,
    "created_at": "2016-12-15 21:35:32",
    "updated_at": "2016-12-15 21:35:32",
    "process": {
      "name": "Sequence Flow",
      "description": null
    },
    "task": {
      "id": 12,
      "task_id": 9,
      "locale": "es",
      "name": "Start",
      "description": null
    }
  },
  {
    "id": 9,
    "uid": "3090cc0d-87ed-405a-b09e-c1eeddacf9e6",
    "process_id": 15,
    "type": "NORMAL",
    "assign_type": "BALANCED",
    "priority_variable": null,
    "assign_variable": null,
    "group_variable": null,
    "mi_instance_variable": null,
    "mi_complete_variable": null,
    "transfer_fly": false,
    "can_upload": false,
    "view_upload": false,
    "view_additional_documentation": false,
    "start": false,
    "send_last_email": true,
    "derivation_screen_tpl": null,
    "selfservice_timeout": 0,
    "selfservice_time": null,
    "selfservice_time_unit": null,
    "selfservice_execution": null,
    "last_assigned_user_id": null,
    "script": null,
    "created_at": "2016-12-15 21:35:32",
    "updated_at": "2016-12-15 21:35:32",
    "process": {
      "name": "Sequence Flow",
      "description": null
    },
    "task": {
      "id": 12,
      "task_id": 9,
      "locale": "es",
      "name": "Start",
      "description": null
    }
  },
  {
    "id": 11,
    "uid": "6359ceee-c51d-42af-9a21-efac76b74112",
    "process_id": 16,
    "type": "NORMAL",
    "assign_type": "BALANCED",
    "priority_variable": null,
    "assign_variable": null,
    "group_variable": null,
    "mi_instance_variable": null,
    "mi_complete_variable": null,
    "transfer_fly": false,
    "can_upload": false,
    "view_upload": false,
    "view_additional_documentation": false,
    "start": false,
    "send_last_email": true,
    "derivation_screen_tpl": null,
    "selfservice_timeout": 0,
    "selfservice_time": null,
    "selfservice_time_unit": null,
    "selfservice_execution": null,
    "last_assigned_user_id": null,
    "script": null,
    "created_at": "2016-12-15 21:37:08",
    "updated_at": "2016-12-15 21:37:08",
    "process": {
      "name": "Sequence Flow",
      "description": null
    },
    "task": {
      "id": 14,
      "task_id": 11,
      "locale": "es",
      "name": "Start",
      "description": null
    }
  },
  {
    "id": 10,
    "uid": "50310e96-7f0c-47f5-9c42-2aaaa3d6152b",
    "process_id": 16,
    "type": "NORMAL",
    "assign_type": "BALANCED",
    "priority_variable": null,
    "assign_variable": null,
    "group_variable": null,
    "mi_instance_variable": null,
    "mi_complete_variable": null,
    "transfer_fly": false,
    "can_upload": false,
    "view_upload": false,
    "view_additional_documentation": false,
    "start": false,
    "send_last_email": true,
    "derivation_screen_tpl": null,
    "selfservice_timeout": 0,
    "selfservice_time": null,
    "selfservice_time_unit": null,
    "selfservice_execution": null,
    "last_assigned_user_id": null,
    "script": null,
    "created_at": "2016-12-15 21:37:08",
    "updated_at": "2016-12-15 21:37:08",
    "process": {
      "name": "Sequence Flow",
      "description": null
    },
    "task": {
      "id": 13,
      "task_id": 10,
      "locale": "es",
      "name": "End",
      "description": null
    }
  }
];
