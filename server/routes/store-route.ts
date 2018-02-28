import { Router, Request, Response, NextFunction } from "express";
import { ObjectId } from "bson";
import { StoreProvider } from "../provider/database-provider/store-provider";
import { Store } from "../models/store.model";
import { FilterGroup } from "../database/model/filter-group.model";

let router: Router = Router();

//get store list
router.get('/all/:userId', (req: Request, res: Response, next: NextFunction) => {
    let filter: FilterGroup;
    let query = req.query.filter;
    if (query) {
        filter = JSON.parse(new Buffer(query, 'base64').toString('ascii'));
    }
    StoreProvider.getUserStores(new ObjectId(req.params.userId), filter)
        .then((response: Store[]) => {
            res.json(response);
        })
        .catch((err: any) => {
            res.json(err);
        });
});

//get store details
router.get('/:storeId', (req: Request, res: Response, next: NextFunction) => {
    StoreProvider.getStore(new ObjectId(req.params.storeId))
        .then((response: Store) => {
            res.json(response);
        })
        .catch((err: any) => {
            res.json(err);
        });
});

//create new store item
router.put('/', (req: Request, res: Response, next: NextFunction) => {
    req.body._id = new ObjectId();
    req.body._user = new ObjectId(req.body._user);
    StoreProvider.createStore(req.body)
        .then((response: Store) => {
            res.json(response);
        })
        .catch((err: any) => {
            res.json(err);
        });
});

//update store item
router.post('/', (req: Request, res: Response, next: NextFunction) => {
    req.body._id = new ObjectId(req.body._id);
    req.body._user = new ObjectId(req.body._user);
    StoreProvider.updateStore(req.body)
        .then((response: Store) => {
            res.json(response);
        })
        .catch((err: any) => {
            res.json(err);
        });
});

//delete store item
router.delete('/:storeId', (req: Request, res: Response, next: NextFunction) => {
    StoreProvider.deleteStore(new ObjectId(req.params.storeId))
        .then((response: Store) => {
            res.json(response);
        })
        .catch((err: any) => {
            res.json(err);
        });
});

export let storeRoutes: Router = router;