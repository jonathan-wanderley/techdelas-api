export default interface IRepository {
  create(payload: any): Promise<any>;
  update(id: any, payload: any, condition?: any): Promise<any>;
  findAll(payload?: any): Promise<any>;
  findById(payload?: any, id?: any): Promise<any>;
  findByEmail(email: string): Promise<any>;
  count(payload: any): Promise<any>;
  delete(id: any): Promise<any>;
}
